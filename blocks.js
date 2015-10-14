
Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("reference_declaration")
        .appendField("References:");
    this.appendStatementInput("page_header")
        .appendField("Methods:");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_header'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header Text:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color:");
    this.setPreviousStatement(true, "page_settings");
    this.setTooltip('');
  }
};

Blockly.Blocks['reference_declaration'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(240);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['var', 'VAR'], ['val', 'VAL']]), 'TYPE');
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("a"), "reference_declaration");
        this.setTooltip('');
        this.setPreviousStatement(true, "page_settings");
        this.setNextStatement(true, "page_settings");
        this.setInputsInline(true);
    }
};

Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_blue'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Blue:")
        .appendField(new Blockly.FieldColour("#3333ff"), "blue");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};