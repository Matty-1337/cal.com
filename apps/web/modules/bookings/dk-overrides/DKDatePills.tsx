"use client";

// DK-CUSTOM: Date pill selector for short rolling booking windows (Today / Tomorrow).
// Replaces full month DatePicker when periodType is ROLLING and periodDays <= 3.
import dayjs from "@calcom/dayjs";
import { useBookerStoreContext } from "@calcom/features/bookings/Booker/BookerStoreProvider";
import { useLocale } from "@calcom/lib/hooks/useLocale";

const BRAND_COLOR = "#2563EB";

export function DKDatePills() {
  const { t } = useLocale();
  const selectedDate = useBookerStoreContext((state) => state.selectedDate);
  const setSelectedDate = useBookerStoreContext((state) => state.setSelectedDate);

  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
  const pills = [
    { date: today, label: `${t("today")}, ${dayjs(today).format("MMM D")}` },
    { date: tomorrow, label: `${t("tomorrow")}, ${dayjs(tomorrow).format("MMM D")}` },
  ] as const;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted text-sm font-medium uppercase tracking-wide">{t("date")}</span>
      <div className="flex gap-2">
        {pills.map(({ date, label }) => {
          const isSelected = selectedDate === date;
          return (
            <button
              key={date}
              type="button"
              onClick={() =>
                setSelectedDate({
                  date,
                  omitUpdatingParams: false,
                  preventMonthSwitching: true,
                })
              }
              className="min-w-0 flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              style={
                isSelected
                  ? {
                      backgroundColor: BRAND_COLOR,
                      borderColor: BRAND_COLOR,
                      color: "white",
                    }
                  : {
                      backgroundColor: "white",
                      borderColor: "#e5e7eb",
                      color: "rgb(17 24 39)",
                    }
              }>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
