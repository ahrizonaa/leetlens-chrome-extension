import fontColorContrast from 'better-font-color-contrast';

class AppTheme {
  EdgeColor: string = '#EEEEEE';
  NodeColor: string = '#D1D1D1';
  NodeFontSize: string = '0.66rem';
  NodeFontFamily: string = 'monospace';
  NodeFontColor: string = '#212121';
  ArrowheadSize: number = 10;
  BackgroundColor: string = '#494949ff';

  readonly FontDark: string = '#000000';
  readonly TabsFontDark: string = '#00000099';
  readonly FontLight: string = '#FFFFFF';
  readonly TabsFontLight: string = '#FFFFFF99';
  readonly UIDark: string = '#515151';
  readonly UILight: string = '#FFFFFF';

  root: HTMLElement;

  constructor() {
    this.root = document.querySelector(':root') as HTMLHtmlElement;
    this.ChangeBackground(this.BackgroundColor);
    this.root.style.setProperty('--theme-ui', this.UIDark);
    this.root.style.setProperty('--theme-font', fontColorContrast(this.UIDark));
    this.root.style.setProperty(
      '--theme-tabs-font',
      fontColorContrast(this.UIDark)
    );
  }

  ChangeBackground(color: string) {
    this.BackgroundColor = color;
    this.root.style.setProperty('--theme-background', this.BackgroundColor);
    this.root.style.setProperty(
      '--theme-floating-font',
      fontColorContrast(this.BackgroundColor)
    );
  }

  brightness(color: any) {
    var r, g, b, hsp;

    if (color.match(/^rgb/)) {
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      color = +(
        '0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&')
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp > 127.5) {
      return 'light';
    } else {
      return 'dark';
    }
  }
}

const Theme = new AppTheme();

export { Theme };
