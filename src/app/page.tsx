import Sidebar from "@/components/Sidebar";
import PromptList from "@/components/PromptList";
import ConversationsList from "@/components/ConversationsList";
import MessagesList from "@/components/MessagesList";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar>
        <ConversationsList />
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
      <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Career Advisor</h1>
              <p className="text-gray-600">Get personalized career advice and guidance</p>
            </div>
            <MessagesList conversationId="3f75dd21-a7a3-4235-a6ea-ca047db12829" />
            <PromptList />
          </div>
        </div>
      </div>
    </div>
  );
}
