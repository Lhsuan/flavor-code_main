import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface RiceBowlCanvasHandle {
  addRice: (count: number) => void;
}

interface RiceBowlCanvasProps {
  fullness: number;
}

interface FallingItem {
  type: 'rice' | 'pork';
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRotation: number;
  life: number;
  opacity: number;
  bounces: number;
  sizeScale: number;
  settled: boolean;
}

const RiceBowlCanvas = forwardRef<RiceBowlCanvasHandle, RiceBowlCanvasProps>(({ fullness }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  const BOWL_BOTTOM_Y = 560;
  const BOWL_CENTER_X = 300;

  const bowlImageRef = useRef<HTMLImageElement | null>(null);
  const porkImageRef = useRef<HTMLImageElement | null>(null);
  const fallingItemsRef = useRef<FallingItem[]>([]);
  const heightMapRef = useRef<number[]>(new Array(60).fill(0));

  useEffect(() => {
    fallingItemsRef.current = [];
    heightMapRef.current = new Array(60).fill(0);
  }, []);

  useEffect(() => {
    const bowlImg = new Image();
    bowlImg.src = 'https://lh3.googleusercontent.com/d/1ZUUz5j9gTftaUIUVt94wRwGnLWREtr7R';
    bowlImg.referrerPolicy = 'no-referrer';
    bowlImg.onload = () => { bowlImageRef.current = bowlImg; };

    const porkImg = new Image();
    porkImg.src = 'https://lh3.googleusercontent.com/d/135USXptD_YJfDEIPSmLv4QXRWyE4xUZC';
    porkImg.referrerPolicy = 'no-referrer';
    porkImg.onload = () => { porkImageRef.current = porkImg; };
  }, []);

  useImperativeHandle(ref, () => ({
    addRice: (count: number) => {
      for (let i = 0; i < count; i++) {
        const x = BOWL_CENTER_X + (Math.random() - 0.5) * 100;
        fallingItemsRef.current.push({
          type: 'pork',
          x,
          y: -400,
          vx: (Math.random() - 0.5) * 2,
          vy: 8,
          rotation: Math.random() * Math.PI * 2,
          vRotation: (Math.random() - 0.5) * 0.15,
          life: 1,
          opacity: 1,
          bounces: 0,
          sizeScale: 0.8 + Math.random() * 0.2,
          settled: false
        });
      }
    },
  }));

  const drawBowl = (ctx: CanvasRenderingContext2D) => {
    if (bowlImageRef.current) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(BOWL_CENTER_X, BOWL_BOTTOM_Y + 15, 112, 21, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30,12,0,0.14)';
      ctx.fill();

      const img = bowlImageRef.current;
      const aspect = img.width / img.height;
      const w = 364;
      const h = w / aspect;
      ctx.drawImage(img, BOWL_CENTER_X - w / 2, BOWL_BOTTOM_Y - h + 15, w, h);
      ctx.restore();
    }

    const items = fallingItemsRef.current;
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      if (!item.settled) {
        item.x += item.vx;
        item.y += item.vy;
        item.vy += 0.3;
        item.rotation += item.vRotation;

        const sliceIndex = Math.floor(item.x / 10);
        const stackHeight = heightMapRef.current[sliceIndex] || 0;
        const distanceFromCenter = Math.abs(item.x - BOWL_CENTER_X);
        const baseMoundY = BOWL_BOTTOM_Y - 210 - (60 * (1 - distanceFromCenter / 90));
        const moundSurfaceY = baseMoundY - stackHeight;
        
        if (item.y > moundSurfaceY) {
          if (item.bounces < 2) {
            item.vy *= -0.4;
            item.vx *= 0.7;
            item.bounces++;
            item.y = moundSurfaceY;
          } else {
            item.settled = true;
            item.y = moundSurfaceY;
            const hIncrease = 3;
            for (let j = -2; j <= 2; j++) {
              const idx = sliceIndex + j;
              if (idx >= 0 && idx < heightMapRef.current.length) {
                heightMapRef.current[idx] += hIncrease * (1 - Math.abs(j) / 3);
              }
            }
          }
        }
      }

      if (porkImageRef.current) {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        const pw = 40 * item.sizeScale; 
        const ph = pw * (porkImageRef.current.height / porkImageRef.current.width);
        ctx.drawImage(porkImageRef.current, -pw / 2, -ph / 2, pw, ph);
        ctx.restore();
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBowl(ctx);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [fullness]);

  return <canvas ref={canvasRef} width={600} height={600} className="max-w-full h-auto" />;
});

RiceBowlCanvas.displayName = 'RiceBowlCanvas';
export default RiceBowlCanvas;
