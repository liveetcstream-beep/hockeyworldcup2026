import { redirect } from "next/navigation";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Hockey World Cup 2026 Schedule & Match Tickets",
  alternates: {
    canonical: "https://hockeyworldcup2026schedule.com/schedule",
  },
};

export default function TicketsPage() {
  redirect("/schedule");
}
