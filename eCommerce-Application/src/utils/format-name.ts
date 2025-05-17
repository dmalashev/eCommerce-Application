export default function formatName(name: string): string {
  let resultName: string = name[0].toUpperCase();

  for (let index = 1; index < name.length; index++) {
    resultName += name[index - 1] === '_' ? name[index].toUpperCase() : name[index];
  }

  return resultName.replace('_', ' ');
}
