# Easy Mail Editor

This is a simple email editor built with React and Vite. It allows users to compose and send emails with various features such as drag-and-drop functionality, email templates, and a rich text editor. The project is designed to be easy to use and customize, with a clean and intuitive interface.

## Package

- Here's an package of a use:

```js
npm i easy-mail-editor
```

## Example

- Here's an example of a use:

```js
const [lang, setLang] = (useState < "en_US") | ("zh_CN" > "zh_CN");
const [skin, setSkin] = (useState < "light") | ("dark" > "light");

const ref = useRef < IRefProps > null;
const rejectRef = useRef < any > null;

const getEditorMjmlJson = () => {
  return ref.current?.getData();
};

<EasyMail
  lang={lang}
  width="100vw"
  height="100vh"
  skin={skin}
  colorPrimary={""}
  ref={ref}
  value={mjmlJson}
  tinymceLink={tinymceLink}
  onUpload={(file: File) => {
    return new Promise((resolve, reject) => {
      rejectRef.current = reject;
      setTimeout(async () => {
        try {
          const url = await fileToBase64(file);
          resolve({ url });
        } catch (error) {
          reject("upload error");
        }
      }, 5000);
    });
  }}
  onUploadFocusChange={() => {
    rejectRef.current("error");
    rejectRef.current = null;
  }}
/>;
```
