// DK-CUSTOM: Upwork interview booking page — iOS floating glass card design
// Controls all visual overrides injected via Booker's customClassNames prop.
// Brand color: #2563EB (Tailwind blue-600)
import type { CustomClassNames } from "@calcom/features/bookings/Booker/types";

export const dkBookingClassNames: CustomClassNames = {
  // Outer page wrapper — gradient bg, dk-booking scope, centered content
  bookerWrapper: "dk-booking flex min-h-full w-full flex-col items-center justify-center",

  // Main card — frosted glass, rounded-2xl, centered
  bookerContainer:
    "!max-w-[960px] !w-full !rounded-2xl !overflow-hidden !p-8 md:!p-10",

  eventMetaCustomClassNames: {
    eventMetaContainer: "!w-[220px] !min-w-[220px] !p-8",
    eventMetaTitle: "!text-[22px] !font-bold !text-gray-900 !leading-tight !tracking-tight",
    eventMetaTimezoneSelect: "!text-sm !text-gray-500 !mt-4",
    eventMetaChildren: "!text-sm !text-gray-500",
  },

  datePickerCustomClassNames: {
    datePickerContainer: "!px-0",
    datePickerTitle: "!text-sm !font-medium !text-gray-700 !uppercase !tracking-wide !mb-3",
    datePickerDays: "!text-sm !text-gray-400 !font-medium",
    datePickerDate: "!rounded-full !text-sm",
    datePickerDatesActive: "!bg-[#2563EB] !text-white hover:!bg-[#1d4ed8]",
    datePickerToggle: "!text-gray-500 hover:!text-gray-900",
  },

  availableTimeSlotsCustomClassNames: {
    availableTimeSlotsContainer: "!pt-2 !w-[240px] !min-w-[240px]",
    availableTimeSlotsHeaderContainer: "!mb-3",
    availableTimeSlotsTitle: "!text-sm !font-medium !text-gray-700 !uppercase !tracking-wide",
    availableTimeSlotsTimeFormatToggle: "!text-xs !text-gray-400",
    availableTimes:
      "dk-timeslot !w-full !rounded-xl !text-sm !font-medium",
  },

  confirmStep: {
    confirmButton: "!bg-[#2563EB] hover:!bg-[#1d4ed8] !rounded-xl !font-medium",
    backButton: "!text-gray-500 hover:!text-gray-700",
  },
};
