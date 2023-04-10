const mapAccentBackGroundColor = [
  "bg-blue-600 dark:bg-[#77B8FF]",
  "bg-pink-600 dark:bg-[#E786F8]",
  "bg-purple-600 dark:bg-[#AD89FB]",
  "bg-green-600 dark:bg-[#44C08D]",
  "bg-yellow-400 dark:bg-[#F5975E]",
];
export const getBackgroundColor = (index: number) =>
  mapAccentBackGroundColor[index];
