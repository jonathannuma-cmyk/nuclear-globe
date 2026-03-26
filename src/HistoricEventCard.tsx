import type { HistoricEvent, HistoricEventCategory } from "./data";

const CATEGORY_LABELS: Record<HistoricEventCategory, string> = {
  test: "Nuclear Test",
  bombing: "Nuclear Attack",
  close_call: "Close Call",
  treaty: "Treaty",
  development: "Development",
  crisis: "Crisis",
};

const CATEGORY_COLORS: Record<HistoricEventCategory, string> = {
  test: "#f59e0b",
  bombing: "#ef4444",
  close_call: "#f97316",
  treaty: "#38bdf8",
  development: "#8b5cf6",
  crisis: "#ef4444",
};

export function HistoricEventCard({
  event,
  onClose,
}: {
  event: HistoricEvent;
  onClose: () => void;
}) {
  const color = CATEGORY_COLORS[event.category];

  const dateStr = (() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (event.month && event.day) return `${months[event.month - 1]} ${event.day}, ${event.year}`;
    if (event.month) return `${months[event.month - 1]} ${event.year}`;
    return `${event.year}`;
  })();

  return (
    <div className="historic-event-card">
      <div className="historic-event-header" style={{ borderBottomColor: `${color}30` }}>
        <span className="historic-event-category" style={{ color }}>
          {CATEGORY_LABELS[event.category]}
        </span>
        <button type="button" className="historic-event-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="historic-event-title">{event.title}</div>
      <div className="historic-event-date">{dateStr}</div>
      <div className="historic-event-description">{event.description}</div>
    </div>
  );
}
