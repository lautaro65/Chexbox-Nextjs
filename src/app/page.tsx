import AnimatedCheckbox from "./components/AnimatedCheckbox/AnimatedCheckbox";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center p-4">
      <div className="flex flex-col space-y-4 p-8 bg-gray-100 rounded-lg shadow-md shadow-[#8888884b] border-t-8 border-t-purple-400">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Animated Checkboxes
        </h2>
        <AnimatedCheckbox label="Enable notifications" />
        <AnimatedCheckbox label="Subscribe to newsletter" />
        <AnimatedCheckbox label="Accept terms and conditions" />
      </div>
    </div>
  );
}
