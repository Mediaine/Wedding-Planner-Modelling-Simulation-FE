/**
 * Pure time helpers for the Timeline Engine.
 * Times are represented as "HH:mm" (24h) strings.
 */
export class TimelineUtils {

  static toMinutes(time: string): number {

    const [h, m] = time
      .split(":")
      .map((v) => Number(v));

    return h * 60 + m;

  }

  static toTime(minutes: number): string {

    const normalized =
      ((minutes % 1440) + 1440) % 1440;

    const h = Math.floor(normalized / 60);

    const m = normalized % 60;

    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

  }

  static addMinutes(
    time: string,
    minutes: number,
  ): string {

    return TimelineUtils.toTime(
      TimelineUtils.toMinutes(time) + minutes,
    );

  }

}
