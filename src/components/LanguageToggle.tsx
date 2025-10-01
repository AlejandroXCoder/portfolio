import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");
  const next = isEs ? "en" : "es";

  const toggle = () => {
    i18n.changeLanguage(next);
    document.documentElement.setAttribute("lang", next);
    localStorage.setItem("i18nextLng", next);
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggle} className="uppercase">
      {isEs ? "EN" : "ES"}
    </Button>
  );
};
