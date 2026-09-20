from .loader import load_grades

df = load_grades()
#print(df)


print(df.info())
print(df.groupby(["id_student", "first_name", "last_name"])["grade"].mean())
print(df.groupby(["id_subject", "subject"])["grade"].mean())
print(df.groupby(["id_semester", "semester"])["grade"].mean())

#Statistiques gene