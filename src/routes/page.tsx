import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import ChatContainer from '@/components/chat/ChatContainer';

export default function Home() {
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <ChatContainer />
    </div>
  );
}
