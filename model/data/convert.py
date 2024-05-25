import pandas as pd
import numpy as np
import json

import os.path
from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM


path = os.path.abspath(os.path.dirname(__file__))
model_name = 'google/gemma-2b-it'


def get_tokenizer():
    return AutoTokenizer.from_pretrained(model_name, add_eos_token=True)


def get_model():
    return AutoModelForCausalLM.from_pretrained(
        model_name, device_map={"": 0})


def relative_file(filename):
    return os.path.join(path, filename)


def convert(import_file='./data.json', export_folder='./dist'):
    with open(relative_file(import_file), encoding='utf-8') as data_file:
        data_json = json.load(data_file)
        df_train = pd.DataFrame.from_dict(data_json['train'])
        df_test = pd.DataFrame.from_dict(data_json['test'])

    df_train.to_csv(os.path.join(
        relative_file(f'{export_folder}/train.csv')), encoding='utf-8', index=False)
    df_test.to_csv(os.path.join(
        relative_file(f'{export_folder}/test.csv')), encoding='utf-8', index=False)


if __name__ == "__main__":
    model = get_model()
    tokenizer = get_tokenizer()
