import { cn } from "@/utils/cn";

type PropsType = {
  disabled?: boolean;
  handleClick?: () => void;
};

export default function Button({ disabled, handleClick }: PropsType) {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "text-white py-2 px-6 min-w-[250px] rounded-md bg-green-600 hover:bg-green-700",
        disabled && "bg-gray-500 hover:bg-gray-500 opacity-70"
      )}
      disabled={disabled}>
      Button
    </button>
  );
}
