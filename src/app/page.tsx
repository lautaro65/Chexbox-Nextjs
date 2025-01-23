import AnimatedCheckbox from "./components/AnimatedCheckbox/AnimatedCheckbox";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex align-middle   p-4">
      <div className="w-60 m-auto h-auto">
        <AnimatedCheckbox label="Enable notifications" />
        <AnimatedCheckbox label="Subscribe to newsletter" />
        <AnimatedCheckbox label="Accept terms " />
      </div>
    </div>
  );
}
