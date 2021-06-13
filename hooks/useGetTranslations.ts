import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react"
import {MessageFormatElement} from "react-intl";

export type MessagesType = Record<string, string> | Record<string, MessageFormatElement[]>;

export const flattenMessages = ((nestedMessages: { [x: string]: any; } | null, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value       = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
})

const useGetTranslations = () => {
  const [messages, setMessages] = useState<MessagesType| null>(null);
  const { locale } = useRouter();
  const currentLocale = locale || 'en-US';
  
  useEffect(() => {
    (async () => {      
      const currentMessages = await import(`../data/phrases/${currentLocale}.json`);
    

      setMessages(flattenMessages(currentMessages));
    })()
  }, [locale])

  console.log(messages, 'messages flattened');
  
    return {messages, currentLocale};
}

export default useGetTranslations;
