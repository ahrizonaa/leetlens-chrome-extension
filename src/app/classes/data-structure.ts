import { Theme } from '../constants/Theme';
import { EdgeSegment } from './edge-segment';
import { UserInput } from '../services/user-input.service';
import { Mathematics } from '../services/mathematics.service';
import { Anime } from '../services/anime.service';
import { CanvasService } from '../services/canvas.service';

class DataStructure {
  public ui!: UserInput;
  public math: Mathematics;
  public anime: Anime;
  public cs: CanvasService;
  canvasBgColor = '#31313100';
  maxCellSize = 50;
  maxRadius = 25;
  minRadius = 10;
  edgeColor = Theme.EdgeColor;
  nodeColor = Theme.NodeColor;
  nodeFontSize = Theme.NodeFontSize;
  nodeFontFamily = Theme.NodeFontFamily;
  nodeFontColor = Theme.NodeFontColor;

  constructor(ui: any) {
    this.math = ui.injector.get(Mathematics);
    this.anime = ui.injector.get(Anime);
    this.cs = ui.injector.get(CanvasService);
    this.ui = ui as UserInput;
  }

  public ClearCanvas() {
    this.cs.ClearCanvas();
  }
}

export { DataStructure, EdgeSegment };
