const nameCardLink = (name: string): any => {
  const currentName = name.toLowerCase();
  const currentArrayName = currentName.split('');

  if (currentArrayName.includes('.') && currentArrayName.includes(' ')) {
    return currentName.split('.').join('').split(' ').join('-');
  }

  if (currentArrayName.includes('.')) {
    return currentName.split('.').join('');
  }

  if (currentName.includes(' ')) {
    return currentName.split(' ').join('-');
  }

  return currentArrayName.join('');
};

export default nameCardLink;
