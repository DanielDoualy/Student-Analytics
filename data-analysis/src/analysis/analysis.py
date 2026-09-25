import pandas as pd


def calculate_general_average(df):
    return df["grade"].mean()


def calculate_average_by_student(df):
    return (
        df.groupby(
            ["id_student", "first_name", "last_name"]
        )["grade"]
        .mean()
        .reset_index()
    )


def calculate_average_by_subject(df):
    return (
        df.groupby(
            ["id_subject", "subject"]
        )["grade"]
        .mean()
        .reset_index()
    )


def calculate_average_by_semester(df):
    return (
        df.groupby(
            ["id_semester", "semester"]
        )["grade"]
        .mean()
        .reset_index()
    )


def calculate_success_rate(df):
    return (df["grade"] >= 10).mean() * 100