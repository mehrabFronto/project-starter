import { Button } from "@/components/ui/button";
import DarkModeToggle from "../_components/DarkModeToggle";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="py-10 px-6 max-w-screen-2xl mx-auto h-screen space-y-20">
      <div className="flex justify-between items-center border-2 p-5 rounded-xl">
        <Button variant="primary">{t("buttonText")}</Button>
        <p className="text-foreground">{t("heading")}</p>
        <DarkModeToggle />
      </div>

      <div className="grid gap-4 lg:gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)] px-2">
        {/* desktop category section*/}
        <div className="border-2 rounded-xl hidden md:flex items-center justify-center md:col-span-4 lg:col-span-3 row-span-2">
          {t("sidebar")}
        </div>

        {/* desktop sort section */}
        <div className="border-2 rounded-xl hidden md:flex items-center justify-center md:col-span-8 lg:col-span-9">
          {t("topBar")}
        </div>

        {/* blogs section */}
        <div className="border-2 rounded-xl flex items-center justify-center md:col-span-8 lg:col-span-9">
          {t("content")}
        </div>
      </div>
    </main>
  );
}
