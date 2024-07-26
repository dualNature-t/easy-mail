export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileRender = new FileReader();

    fileRender.onload = (e) => {
      resolve(e.target?.result as string);
    };

    fileRender.onerror = (e) => reject(e);

    fileRender.readAsDataURL(file);
  });
};
