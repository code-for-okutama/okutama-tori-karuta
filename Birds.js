function Birds() {
    // birds
    // 1-
    this.hojiro = new Bird('hojiro', 'ホオジロ');
    this.hiyodori = new Bird('hiyodori', 'ヒヨドリ');
    this.misosazai = new Bird('misosazai', 'ミソサザイ');
    this.uguisu = new Bird('uguisu', 'ウグイス');
    this.ooruri = new Bird('ooruri', 'オオルリ');
    this.kibitaki = new Bird('kibitaki', 'キビタキ');
    this.kogera = new Bird('kogera', 'コゲラ');
    this.tobi = new Bird('tobi', 'トビ');
    this.kakesu = new Bird('kakesu', 'カケス');
    this.suzume = new Bird('suzume', 'スズメ');
    // 11-
    this.kisekirei = new Bird('kisekirei', 'キセキレイ');
    this.hashibosogarasu= new Bird('bosogarasu', 'ハシボソガラス');
    this.gabicho = new Bird('gabicho', 'ガビチョウ');
    this.ikaru = new Bird('ikaru', 'イカル');
    this.jyobitaki = new Bird('jobitaki', 'ジョウビタキ');
    this.komadori = new Bird('komadori', 'コマドリ');
    this.yabusame = new Bird('yabusame', 'ヤブサメ');
    this.sankoucho = new Bird('sankouchou', 'サンコウチョウ');
    this.fukurou = new Bird('fukurou', 'フクロウ');
    this.aobato = new Bird('aobato', 'アオバト');
    // 21-
    this.kijibato = new Bird('kijibato', 'キジバト');
    this.yamadori = new Bird('yamadori', 'ヤマドリ');
    this.koruri = new Bird('koruri', 'コルリ');
    this.ruribitaki = new Bird('ruribitaki', 'ルリビタキ');
    this.mozu = new Bird('mozu', 'モズ');
    this.shijyukara = new Bird('shijukara', 'シジュウカラ');
    this.yamasemi = new Bird('yamasemi', 'ヤマセミ');
    this.kawasemi = new Bird('kawasemi', 'カワセミ');
    this.higara = new Bird('higara', 'ヒガラ');
    this.akahara = new Bird('akahara', 'アカハラ');
    // 31-
    this.toratsugumi = new Bird('toratsugumi', 'トラツグミ');
    this.aogera = new Bird('aogera', 'アオゲラ');
    this.ooakagera = new Bird('oakagera', 'オオアカゲラ');
}

function Bird(filePrefix, name) {
    this.filePrefix = filePrefix;
    this.name = name;
    this.selected = false;
    this.pick = async function (){
        this.selected = !this.selected;
        if (this.selected) {
            await playSe("names/" + this.filePrefix);
            await playSe(this.filePrefix);
        }
    }
}
