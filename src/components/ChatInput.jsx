import React from "react";
import {
  ActionIcon,
  ChatInputActionBar,
  ChatInputArea,
  ChatSendButton,
  TokenTag,
} from "@lobehub/ui";
import { Eraser, Languages } from "lucide-react";
import { Flexbox } from "react-layout-kit";

const ChatInput = () => {
  return (
    <Flexbox>
      <ChatInputArea
        bottomAddons={<ChatSendButton />}
        topAddons={
          <ChatInputActionBar
            leftAddons={
              <>
                <ActionIcon icon={Languages} />
                <ActionIcon icon={Eraser} />
                <TokenTag maxValue={5000} value={1000} />
              </>
            }
          />
        }
      />
    </Flexbox>
  );
};

export default ChatInput;
