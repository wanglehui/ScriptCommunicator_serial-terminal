/*This script demonstrates sending of user input*/

//Is called if this script shall be exited.
function stopScript() 
{
    scriptThread.appendTextToConsole("script has been stopped");
}

//The dialog is closed.
function dialogFinished(e)
{
	scriptThread.stopScript()
}

function sendSequence()
{
	var sender = this;
	scriptThread.appendTextToConsole(sender.getObjectName());
	var data = "send data: ";
	data += UI_LineEdit.text() + " ";
	data += UI_ComboBox.currentText() + " ";
	data += UI_SpinBox.value().toString() +"\n";
	
	if(!scriptThread.sendString(data))
	{
		scriptThread.messageBox("Critical", "Error", "Sending failed. Check if ScriptCommunicator is connected.");
	}
}

scriptThread.appendTextToConsole('script has started');
UI_Dialog.finishedSignal.connect(dialogFinished);

UI_SendButton.clickedSignal.connect(UI_SendButton, sendSequence)

scriptThread.appendTextToConsole("serial port signals: " + scriptThread.getSerialPortSignals().toString(16));
scriptThread.setMainWindowAndTaskBarIcon("mainWindowIcon.ico");
UI_Dialog.setWindowIcon("dialogIcon.png");