import fs from 'fs';
import fetch from 'node-fetch';
import OpenAI, { toFile } from 'openai';

const openai = new OpenAI({
    apiKey: "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",
});

// upload training file
//var res = await openai.files.create({ file: fs.createReadStream('/home/zgao/Documents/manju gisun/src/train.jsonl'), purpose: 'fine-tune' });
//console.log(res)

// create a fine-tune model
//const fineTune = await openai.fineTuning.jobs.create({ training_file: 'file-GYzW3DZ541LHOkylky8h1Jcn', model: 'gpt-3.5-turbo' });


// List 10 fine-tuning jobs
//let page = await openai.fineTuning.jobs.list({ limit: 10 });
//console.log(page)

// Retrieve the state of a fine-tune
let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-sFNBtwsOyPOr5n76D0Dp3LRZ');
console.log(fineTune)

// Cancel a job
//let status = await openai.fineTuning.jobs.cancel('ftjob-abc123');

// List up to 10 events from a fine-tuning job
//let events = await openai.fineTuning.jobs.listEvents(fineTune.id, { limit: 10 });

// Delete a fine-tuned model (must be an owner of the org the model was created in)
//let model = await openai.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123')
