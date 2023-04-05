test("upload base64 1.0", async () => {
  const {
    reference: { data: {  contentType,   extension,   fileBuffer, fileName }, model, property, header, }} = await $app["uploadBase64 1.0"]({
    base64: "SGFsbG8gdGhpcyBpcyBzb21lIHRleHQgbmljZQ==",
    model: { name: "Testing" },
    property: [{ name: "test" }],
  });

  assert(
    {
      model,
      property,
      header,
    },
    { model: "Testing", property: "test", header: { headers: {} } }
  );

  let view = new Uint8Array(fileBuffer);
  
  assert("Hallo this is some text nice", String.fromCharCode.apply(null, view))
});
