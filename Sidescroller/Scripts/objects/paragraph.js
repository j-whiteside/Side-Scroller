var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Paragraph = (function (_super) {
        __extends(Paragraph, _super);
        function Paragraph(x, y, labelText) {
            _super.call(this, labelText, constants.PARAGRAPH_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.lineHeight = 25;
        }
        return Paragraph;
    })(createjs.Text);
    objects.Paragraph = Paragraph;
})(objects || (objects = {}));
//# sourceMappingURL=paragraph.js.map
