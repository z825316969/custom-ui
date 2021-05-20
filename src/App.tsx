import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

interface IImgData {
  message: string
  status: string
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

interface ICurrentTheme {
  [key: string]: string
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#222',
  },
}

export const ThemeContext = React.createContext<ICurrentTheme>(themes.light)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={event => {
            console.log(`event`, event)
          }}
          size={ButtonSize.Larger}
        >
          Larger按钮
        </Button>
        <Button disabled>按钮2</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          按钮
        </Button>
        <Button btnType={ButtonType.Link} disabled>
          link
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          link baidu
        </Button>
      </header>
    </div>
  )
}

export default hot(App)
