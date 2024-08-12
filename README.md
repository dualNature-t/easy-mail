# Easy Mail Editor

This is a simple email editor built with React and Vite. It allows users to compose and send emails with various features such as drag-and-drop functionality, email templates, and a rich text editor. The project is designed to be easy to use and customize, with a clean and intuitive interface.

## 📦 Install

```bash
npm install easy-mail-editor
```

```bash
yarn add easy-mail-editor
```

```bash
pnpm add easy-mail-editor
```

## 🔨 Usage

```tsx
const [lang, setLang] = useState<EasymailLangType>("zh_CN");
const [skin, setSkin] = useState<EasymailSkinType>("light");

const ref = useRef<EasymailRefProps>(null);
const rejectRef = useRef<Promise<string>>(null);

const getEditorMjmlJson = () => {
  return ref.current?.getData();
};

return (
  <Easymail
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
  />
);
```

## 🔗 Links

- [Home page](https://dualnature-t.github.io/easy-mail-demo/)
