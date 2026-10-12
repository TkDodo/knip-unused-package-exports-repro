import { createMessage as createMessageBarrel } from '@repro/messages-barrel';
import { createMessage as createMessageExport } from '@repro/messages-export/create-message';

console.log(createMessageBarrel('hello barrel'));
console.log(createMessageExport('hello export'));
