import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_up3dqi5",
        "template_0lz9f1d",
        form.current,
        "r10s-hMpE6DwP6_gw"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent!");
        e.target.reset();
      });
  };

  return (
    <section>
      <div className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center p-2">
          {" "}
          {t("contact1")}{" "}
        </h1>
        <p className="text-s leading-loose text-center">{t("contact2")}</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8 ml-5 mr-5">
          <div>
            <Label htmlFor="name" className="ml-1">
              {t("name")}
            </Label>
            <Input
              type="name"
              name="user_name"
              id="name"
              placeholder="Full Name"
              className=""
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="ml-1">
              Email
            </Label>
            <Input
              type="email"
              name="user_email"
              id="email"
              placeholder="example@gmail.com"
              className=""
              required
            />
          </div>
          <div>
            <Label htmlFor="subject" className="form__label">
              {t("subject1")}
            </Label>
            <Input
              type="text"
              name="user_subject"
              id="subject"
              placeholder={t("subject2")}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" className="form__label">
              {t("message")}
            </Label>
            <Textarea
              name="message"
              rows="6"
              type="text"
              id="message"
              required
              placeholder="Leave your comment"
              className="form__input mt-1"
            />
          </div>
          <Button
            type="submit"
            className="btn rounded sm:w-fit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("pleasewait")}
              </>
            ) : (
              t("send")
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
