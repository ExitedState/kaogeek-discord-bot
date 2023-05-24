const urlRegex =
  /(?:(?:https?|ftp):\/\/|\b[\da-z]+\.)(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s!"'(),.:;<>?[\]`{}«»‘’“”]))?/gi

export default (string_: string): RegExpMatchArray | null => {
  // console.log(str.match(urlRegex));
  return string_.match(urlRegex)
}
