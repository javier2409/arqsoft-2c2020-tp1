FROM python:3.8.6
RUN pip install flask gunicorn
WORKDIR /project
COPY app.py ./
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]