export default class Typewriter {
  element: HTMLElement;
  loop: boolean;
  typingSpeed: number;
  deletingSpeed: number;
  constructor(
    element: HTMLElement,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.element = element;
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }
}
