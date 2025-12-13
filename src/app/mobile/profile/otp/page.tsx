import { Suspense } from "react";
import OtpClient from "./OtpClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <OtpClient />
    </Suspense>
  );
}
