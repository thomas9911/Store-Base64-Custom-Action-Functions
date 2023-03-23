import { atob } from "Base64";

const parseHeaders = (headers) =>
  headers.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});

const uploadBase64 = async ({
  model: { name: modelName },
  property: [{ name: propertyName }],
  base64,
  headers = [],
}) => {
  const url = atob(base64);
  const reference = await storeFile(modelName, propertyName, url, {
    headers: parseHeaders(headers),
  });

  return {
    reference,
  };
};

export default uploadBase64;
