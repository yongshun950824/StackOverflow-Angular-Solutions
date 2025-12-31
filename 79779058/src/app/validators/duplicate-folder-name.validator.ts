import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

export const duplicateFolderName = (
  parentDirectory?: FormGroup
): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;

    let folderNamesInSameDirectory: string[] = parentDirectory
      ? (parentDirectory.get('subFolders').value as any[])?.map((x) => x.name)
      : (control.parent.parent?.value as any[]).map((x) => x.name);

    console.log(folderNamesInSameDirectory);

    if (folderNamesInSameDirectory.indexOf(control.value) > -1)
      return {
        duplicateName: true,
      };

    return null;
  };
};
