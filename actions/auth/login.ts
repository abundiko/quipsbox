import { useFormSubmit } from "@/hooks";
import { ApiResponse } from "@/types/basicTypes";
import { apis } from "@/utils/apis";
import { ClientRequest } from "@/utils/clientFetch";
import { paths } from "@/utils/paths";
import { validators } from "@/utils/validators";
import { useRouter } from "expo-router";
import { z } from "zod";

const schema = z.object({
  email: validators.email,
  password: validators.password,
});

type FormType = z.infer<typeof schema>;

export function useLoginAction() {
  const { replace, back } = useRouter();
  const sub = useFormSubmit<FormType>({
    logging: true,
    onSubmit: async (data) => {
      const isValid = schema.safeParse(data);
      if (!isValid.success)
        return {
          error: "Fix errors and submit again",
          fieldErrors: isValid.error.flatten().fieldErrors,
        };

      const req = await ClientRequest.post(apis.auth.login, data);
      const res = (await req.json()) as ApiResponse;

      if (res.status == 200) {
        back();
        replace(paths.index);
        return { success: "Logging in..." };
      }

      return { error: res.data ?? "Invalid email or password" };
    },
  });

  return { ...sub };
}
