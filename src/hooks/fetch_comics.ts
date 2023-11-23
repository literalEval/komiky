async function fetchComics(searchString: object) {
  // const response = await fetch(
  //   "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
  //   {
  //     headers: {
  //       Accept: "image/png",
  //       Authorization:
  //         "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(searchString),
  //   }
  // );

  const response = await fetch(
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?h=240"
  );

  const result = await response.blob();
  return result;
}

export default fetchComics;
