import {EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from "@angular/core";
import {executeIf, isChangedAndNotNullOrUndefined} from "./core.free.functions";

export abstract class BaseDialog implements OnInit, OnDestroy, OnChanges {
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Input() modal: boolean = true;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  protected constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngOnChanges(changes: SimpleChanges) {
    executeIf(isChangedAndNotNullOrUndefined(changes, "displayDialog") && this.displayDialog, () => this.onShowDialogEvent());
    executeIf(isChangedAndNotNullOrUndefined(changes, "displayDialog") && !this.displayDialog, () => this.onCloseDialogEvent());
  }

  protected onShowDialogEvent(): void {
  }

  protected onCloseDialogEvent(): void {
  }

  public closeDialog(value: boolean = true): void {
    this.onClearData();
    this.displayDialog = !value;
    this.onClose.emit(value);
  }

  protected onClearData(): void {

  }

  protected setTitle(title: string): void {
    this.title = title;
  }
}
