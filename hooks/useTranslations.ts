import merge from "lodash.merge";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react"

export default  () => {
  const [messages, setMessages] = useState(null);
  const localeInfo = useRouter();
  const currentLocale = localeInfo.locale || 'en-US';
  const defaultLocale = localeInfo.defaultLocale;
  
  useEffect(() => {
    (async () => {
      const currentMessages = await import(`../data/phrases/p/${currentLocale}.json`);
      console.log(currentMessages, 'currentMessages');
      
      const defaultMessages = await import(`../data/phrases/p/${defaultLocale}.json`);
      const messages = merge(defaultMessages.default, currentMessages.default);

      setMessages(messages);
    })()
  }, [defaultLocale, currentLocale])

    return {messages, currentLocale, defaultLocale};
}
