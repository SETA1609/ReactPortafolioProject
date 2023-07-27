import { useState } from "react";

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */

type ResponseType = "success" | "error";

interface ApiResponse {
  type: ResponseType;
  message: string;
}

interface SubmitHook {
  isLoading: boolean;
  response: ApiResponse | null;
  submit: (url: string, data: FormData) => Promise<void>;
}

const useSubmit = (): SubmitHook => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const submit = async (url: string, data: FormData) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.get("firstName")}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
