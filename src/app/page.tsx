import Sidebar from "@/components/Sidebar";
import PromptList from "@/components/PromptList";

export default function Home() {
  return (
    <Sidebar>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Career Advisor</h1>
            <p className="text-gray-600">Get personalized career advice and guidance</p>
          </div>
          <PromptList />
        </div>
      </div>
    </Sidebar>
  );
}
