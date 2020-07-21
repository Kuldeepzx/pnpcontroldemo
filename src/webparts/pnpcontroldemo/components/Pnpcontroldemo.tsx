import * as React from 'react';
import styles from './Pnpcontroldemo.module.scss';
import { IPnpcontroldemoProps } from './IPnpcontroldemoProps';

import { escape } from '@microsoft/sp-lodash-subset';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';

export interface IControlsState {    
  filePickerResult:any;  
} 
export default class Pnpcontroldemo extends React.Component<IPnpcontroldemoProps, IControlsState> {
  constructor (props:IPnpcontroldemoProps, state:IControlsState){
    super(props);
    this.state = {
      filePickerResult:null
    }
  }
  public render(): React.ReactElement<IPnpcontroldemoProps> {
    return (
      <div className={ styles.pnpcontroldemo }>
      <FilePicker    
        buttonLabel="Select File"    
        onSave={(filePickerResult: IFilePickerResult) => { this.setState({filePickerResult }); alert(JSON.stringify(this.state.filePickerResult)); }}    
        onChanged={(filePickerResult: IFilePickerResult) => { this.setState({filePickerResult });alert(JSON.stringify(this.state.filePickerResult)); }}    
        context={this.props.context}    
      />      
      </div>
    );
  }
}
