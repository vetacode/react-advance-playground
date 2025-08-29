import { useTheme } from '../Context/ThemeContext';
import Switch from '../Switch';

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'dark' ? (
        <h1 style={{ color: 'salmon' }}>Theme Switcher</h1>
      ) : (
        <h1 style={{ color: 'goldenrod' }}>Theme Switcher</h1>
      )}
      <header>
        <Title>Little Lemon 🍕</Title>
        <Switch />
      </header>
    </>
  );
};

const Page = () => {
  return (
    <div className='Page'>
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function ThemeSwitcher() {
  const { theme } = useTheme();
  return (
    <div
      className='section'
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

export { ThemeSwitcher };
