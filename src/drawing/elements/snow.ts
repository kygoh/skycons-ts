import { TAU } from "../../constants";
import { line } from "./line";

export function snow(
    ctx: CanvasRenderingContext2D, time: number,
    cx: number, cy: number, cw: number, s: number,
    color: string,
): void {
    time /= 3000;

    const a = cw * 0.16;
    const b = s * 0.75;
    const u = time * TAU * 0.7;
    const ux = Math.cos(u) * b;
    const uy = Math.sin(u) * b;
    const v = u + TAU / 3;
    const vx = Math.cos(v) * b;
    const vy = Math.sin(v) * b;
    const w = u + TAU * 2 / 3;
    const wx = Math.cos(w) * b;
    const wy = Math.sin(w) * b;

    let p;
    let x;
    let y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (let i = 0; i < 4; ++i) {
        p = (time + i / 4) % 1;
        x = cx + Math.sin((p + i / 4) * TAU) * a;
        y = cy + p * cw;
        line(ctx, x - ux, y - uy, x + ux, y + uy);
        line(ctx, x - vx, y - vy, x + vx, y + vy);
        line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
}
