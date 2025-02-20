import Image from "next/image";
import {
  ClockIcon,
  ImagePlusIcon,
  MessageSquareIcon,
  ZapIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    id: 1,
    icon: MessageSquareIcon,
    title: "Cuộc trò chuyện tự nhiên",
    description:
      "Tham gia các cuộc trò chuyện cùng ngôn ngữ tự nhiên với chúng tôi.",
  },
  {
    id: 2,
    icon: ZapIcon,
    title: "Phản hồi nhanh chóng",
    description:
      "Bạn sẽ nhận lại câu trả lời ngay thức thì, dù là khó đến đâu.",
  },
  {
    id: 3,
    icon: ClockIcon,
    title: "Cập nhật trực tiếp",
    description:
      "Nhận lại phản hồi theo thời gian thực, như bạn đang trò chuyện trực tiếp.",
  },
  {
    id: 4,
    icon: ImagePlusIcon,
    title: "Tiếp nhận hình ảnh",
    description: "Đăng tải hình ảnh lên Ask-SQL, nhận phản hồi mong muốn.",
  },
];

export default function ChatPage() {
  return (
    <main className="flex-1">
      <section className="w-full flex flex-col justify-center items-center py-6 md:py-12 lg:py-16 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Chào mừng bạn đến với Ask-SQL
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg dark:text-gray-400">
                Hãy trò chuyện cùng với tôi về cơ sở dữ liệu, chúng tôi sẽ giải
                đáp các thắc mắc của bạn một các chính xác và nhanh chóng nhất.
              </p>
            </div>

            <div className="w-full max-w-sm space-y-2">
              <div className="relative w-full h-48 mt-12 border rounded-lg">
                <Image
                  src="/xaiLogo.png"
                  alt="xAI Logo"
                  layout="fill"
                  className="object-contain aspect-square dark:invert rounded-lg"
                />
                <div className="absolute bottom-0 right-0 left-0 bg-black/90 text-white p-2 rounded-b-lg font-bold uppercase">
                  Powered By
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <Card key={card.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <card.icon className="size-6" />
                    <span>{card.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
