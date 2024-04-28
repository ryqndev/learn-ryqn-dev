from transformers import AutoTokenizer, AutoModelForCausalLM, TextStreamer
import torch


model_name = 'google/gemma-2b-it'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=torch.bfloat16
)
# tokenizer = AutoTokenizer.from_pretrained("google/gemma-2b-it")
# model = AutoModelForCausalLM.from_pretrained(
#     "google/gemma-2b-it",
#     torch_dtype=torch.bfloat16
# )

input_text = "What is a backend?"
input_ids = tokenizer(input_text, return_tensors="pt")

streamer = TextStreamer(tokenizer=tokenizer)

outputs = model.generate(**input_ids,  streamer=streamer, max_length=2000)
# print(tokenizer.decode(outputs[0]))
