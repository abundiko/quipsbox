import { useState } from "react";

export type _JSON = Record<string, string>;

export type SubmitResponse = {
  error?: string;
  data?: any;
  success?: string;
  fieldErrors?: { [key: string]: string[] };
};

export type UseFormSubmitParams<T> = {
  onSubmit: (values: T) => Promise<void | SubmitResponse>;
  logging?: boolean;
};

export function useFormSubmit<T extends _JSON>({
  onSubmit,
  logging = false,
}: UseFormSubmitParams<T>) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<T>({} as T);
  const [res, setRes] = useState<SubmitResponse>({});

  function log(data: any) {
    if (logging) console.log(data);
  }

  function updateValue(key: string, value: string) {
    setValues({ ...values, [key]: value });
  }

  const inputProps = (key: string) => ({
    onChangeText: (value: string) => updateValue(key, value),
    value: values[key] ?? "",
    errors: res.fieldErrors?.[key],
  });

  async function handleSubmit() {
    setLoading(true);
    setRes({});
    log({ values });
    try {
      const _res = await onSubmit(values);
      setRes(_res ?? {});
    } catch (e) {
      console.error(e);
      setRes({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  }

  const formButtonProps = {
    loading,
    onPress: handleSubmit,
  };

  return { inputProps, handleSubmit, formButtonProps, res };
}
